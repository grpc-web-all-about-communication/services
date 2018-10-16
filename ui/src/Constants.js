const DEFAULT_TIMEOUT = 1000;
const LINES_COUNT = 1;
const DEFAULT_CANCEL_TIMEOUT = 900;
const GATEWAY_SERVICE_HOST = '35.233.196.238';

export const CONSTANTS = {

    GATEWAY_SERVICE_HOST: 'http://' + GATEWAY_SERVICE_HOST,

    FIELD_WIDTH:  767,
    FIELD_HEIGHT: 1152,

    LINES_COUNT: LINES_COUNT,

    START_Y_POSITION: -50,

    GOOSE_WIDTH: 62,
    GOOSE_HEIGHT: 32,
    GOOSE_FRAMES_COUNT: 7,

    CLOUD_WIDTH: 62,

    EXPLOSION_WIDTH: 82,
    EXPLOSION_HEIGHT: 78,
    EXPLOSION_FRAMES_COUNT: 6,

    AIRCRAFT_WIDTH: 90,
    AIRCRAFT_HEIGHT: 101,
    AIRCRAFT_OFFSET: 70,

    ENGINES_COUNT: 4,
    ENGINE_ALIVE_CLASSNAME: 'alive',
    ENGINE_DEAD_CLASSNAME: 'dead',

    TOP_SCORES_COUNT: 5,

    DEFAULT_TIMEOUT: DEFAULT_TIMEOUT,
    TOP_PLAYER_SCORE_INTERVAL: DEFAULT_TIMEOUT,
    SCORE_INTERVAL: DEFAULT_TIMEOUT,
    PLAYER_ID_INTERVAL: DEFAULT_TIMEOUT,
    FIXTURE_INTERVAL: LINES_COUNT * DEFAULT_TIMEOUT,
    INTERVAL_BETWEEN_LINES: DEFAULT_TIMEOUT,

    CANCEL_TIMEOUT: DEFAULT_CANCEL_TIMEOUT,
};
