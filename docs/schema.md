# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
username        | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

## solo slams
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, foreign_key
likes           | integer   | not null, default = 0
title           | string    | not null, max = 45 chars
body            | string    | not null, max/min TBD

## group slams
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
initiator_id    | integer   | not null, foreign_key
likes           | integer   | not null, default = 0
title           | string    | not null, max = 45 chars
body            | string    | not null, max/min TBD
(an array of contributor IDs?)

## Friendhships
column name     | data type | details
----------------|-----------|-----------------------
user_id1        | integer   | not null, primary key
user_id2        | integer   | not null, primary key (unique combination of users)

## Likes
column name     | data type | details
----------------|-----------|-----------------------
slam_id         | integer   | not null, foreign_key
user_id         | integer   | not null, foreign_key
