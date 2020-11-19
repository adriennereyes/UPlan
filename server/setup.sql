CREATE SCHEMA planner
    AUTHORIZATION postgres;

CREATE TABLE planner."Users"
(
    "UserID" integer NOT NULL,
    "UserName" text NOT NULL,
    "Password" text NOT NULL,
    PRIMARY KEY ("UserID"),
    CONSTRAINT "UserName" UNIQUE ("UserName")
);

ALTER TABLE planner."Users"
    OWNER to postgres;

CREATE TYPE event as ENUM ('Class', 'Meeting', 'Task', 'Reminder');

CREATE TABLE planner."Events"
(
    "EventID" integer NOT NULL,
    "UserID" integer NOT NULL,
    "Title" text,
    "Description" text,
    "StartDate" date NOT NULL,
    "EndDate" date,
    "Deleted" boolean,
    "EventType" event NOT NULL,
    PRIMARY KEY ("EventID"),
    CONSTRAINT "UserID" FOREIGN KEY ("EventID")
        REFERENCES planner."Users" ("UserID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE planner."Events"
    OWNER to postgres;