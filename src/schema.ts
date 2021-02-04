import { gql } from 'apollo-server';

export const typeDefs = gql`
    type Query {
        "Query to get the fighter name and their fight history"
        fighter: Fighter!
    }
    type Fighter {
        id: ID!
        "the fighter's first name"
        firstName: String!
        "the fighter's last name"
        lastName: String!
        "the fighter's fight history"
        fightHistory: [fightHistory!]!
    }
    type fightHistory {
        "the event's date"
        date: String!
        "the opponent's full name"
        opponent: String!
        "the fight's result"
        result: String!
        "the method of victory"
        decision: String!
        "the round of victory"
        round: String!
        "the time in the round of victory"
        time: String!
        "the event's name"
        event: String!
    }
`;