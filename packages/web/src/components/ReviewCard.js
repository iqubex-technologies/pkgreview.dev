import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useMutation } from 'react-apollo'
import gql from 'graphql-tag'
import moment from 'moment'

import cookies from '../lib/cookies'
import { placeholderUserImage } from '../api/meta'
import { FlexContainer } from '../lib/styles/styled'
import Center from './Center'
import StarRating from './StarRating'
import useUser from './hooks/useUser'

const FLAG_REVIEW_MUTATION = gql`
  mutation FLAG_REVIEW_MUTATION(
    $reviewId: String!
    $currentUserToken: String!
  ) {
    flagReview(reviewId: $reviewId, currentUserToken: $currentUserToken) {
      _id
      by {
        _id
      }
      review {
        _id
      }
    }
  }
`

export default function ReviewCard({ review }) {
  const [{ avatar, username }, { userId }] = useUser(review?.author?.githubId)

  // null - not flagged, true - flagged, false - error
  const [isFlagged, setIsFlagged] = useState(null)
  const [isFlagLoading, setIsFlagLoading] = useState(false)

  const [flagReviewMutation, flagReviewMutationData] = useMutation(
    FLAG_REVIEW_MUTATION
  )

  const updatedAt = review?.updatedAt

  return (
    <article
      className="block accent fixed"
      style={{ padding: '10px', marginTop: '40px' }}
    >
      <FlexContainer
        firstWidth="35%"
        lastWidth="65%"
        style={{ textAlign: 'start' }}
      >
        <div
          style={{
            padding: '20px 0px',
          }}
        >
          <Center>
            <>
              <img
                src={avatar || placeholderUserImage}
                alt="Profile"
                width="125"
                style={{ borderRadius: '100%' }}
              />

              <h1>
                {username ? (
                  <a
                    style={{ color: '#fff' }}
                    href={`https://github.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {review.author.name}
                  </a>
                ) : (
                  review.author.name
                )}
              </h1>

              <StarRating
                rating={review?.rating?.score}
                starColor="#eaeaea"
                emptyStarColor="#273b7c"
                fontSize="50px"
              />

              <h5>
                {moment(updatedAt).format('dddd, DD MMMM YYYY − hh:mm a')}
              </h5>

              <br />

              {userId && (
                <h6>
                  {review?.author?._id === userId ? (
                    `This is your review`
                  ) : (
                    <button
                      className="block"
                      style={{ padding: '5px' }}
                      onClick={async () => {
                        const thisFlagReviewMutation = await flagReviewMutation(
                          {
                            variables: {
                              reviewId: review._id,
                              currentUserToken: cookies.get('pkgReviewToken'),
                            },
                          }
                        )

                        if (thisFlagReviewMutation?.data?.flagReview?._id) {
                          setIsFlagged(true)
                        }
                      }}
                      disabled={isFlagged || isFlagLoading}
                      type="button"
                    >
                      {isFlagged ? `Reported! Thanks :)` : `Report 🚩`}
                      {isFlagLoading && `Loading...`}
                    </button>
                  )}
                </h6>
              )}
            </>
          </Center>
        </div>

        <div style={{ padding: '20px' }}>
          <p
            style={{
              fontSize: '20px',
              whiteSpace: 'pre-line',
              textAlign: 'justify',
            }}
          >
            {review.review}
          </p>
        </div>
      </FlexContainer>
    </article>
  )
}

ReviewCard.propTypes = {
  review: PropTypes.object.isRequired,
}
