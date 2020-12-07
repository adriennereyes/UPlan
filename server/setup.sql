CREATE SCHEMA planner
    AUTHORIZATION postgres;

CREATE TABLE planner.Users
(
    user_id INT GENERATED ALWAYS AS IDENTITY NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    PRIMARY KEY (user_id),
    CONSTRAINT username UNIQUE (username)
);

ALTER TABLE planner.Users
    OWNER to postgres;

CREATE TYPE event as ENUM ('School', 'Work', 'Appointment', 'Party');

CREATE TABLE planner.Events
(
    event_id INT GENERATED ALWAYS AS IDENTITY NOT NULL,
    user_id integer NOT NULL,
    title text,
    description text,
    start_date date NOT NULL,
    end_date date,
    deleted boolean,
    type event NOT NULL,
    PRIMARY KEY (event_id),
    CONSTRAINT fk_user 
        FOREIGN KEY (user_id)
        REFERENCES planner.Users(user_id)
);

ALTER TABLE planner.Events
    OWNER to postgres;