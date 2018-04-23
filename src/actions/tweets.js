export const RECIVE_TWEETS = "RECIVE_TWEETS";

export function reciveTweets (tweets) {
    return {
        type: RECIVE_TWEETS,
        tweets
    }
}