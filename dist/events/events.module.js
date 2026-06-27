"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsModule = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const event_read_model_1 = require("./models/event-read.model");
const event_participant_read_model_1 = require("./models/event-participant-read.model");
const character_version_read_model_1 = require("../character-versions/models/character-version-read.model");
const character_read_model_1 = require("../characters/models/character-read.model");
const event_model_1 = require("./models/event.model");
const event_participant_model_1 = require("./models/event-participant.model");
const arc_island_model_1 = require("../arcs/models/arc-island.model");
const arc_island_read_model_1 = require("../arcs/models/arc-island-read.model");
const character_version_model_1 = require("../character-versions/models/character-version.model");
const character_model_1 = require("../characters/models/character.model");
const events_service_1 = require("./events.service");
const events_controller_1 = require("./events.controller");
const create_event_handler_1 = require("./commands/handlers/create-event.handler");
const create_events_bulk_handler_1 = require("./commands/handlers/create-events-bulk.handler");
const update_event_handler_1 = require("./commands/handlers/update-event.handler");
const delete_event_handler_1 = require("./commands/handlers/delete-event.handler");
const add_participant_to_event_handler_1 = require("./commands/handlers/add-participant-to-event.handler");
const remove_participant_from_event_handler_1 = require("./commands/handlers/remove-participant-from-event.handler");
const get_events_handler_1 = require("./queries/handlers/get-events.handler");
const get_event_by_id_handler_1 = require("./queries/handlers/get-event-by-id.handler");
const get_event_participants_handler_1 = require("./queries/handlers/get-event-participants.handler");
const CommandHandlers = [
    create_event_handler_1.CreateEventHandler,
    create_events_bulk_handler_1.CreateEventsBulkHandler,
    update_event_handler_1.UpdateEventHandler,
    delete_event_handler_1.DeleteEventHandler,
    add_participant_to_event_handler_1.AddParticipantToEventHandler,
    remove_participant_from_event_handler_1.RemoveParticipantFromEventHandler,
];
const QueryHandlers = [
    get_events_handler_1.GetEventsHandler,
    get_event_by_id_handler_1.GetEventByIdHandler,
    get_event_participants_handler_1.GetEventParticipantsHandler,
];
let EventsModule = class EventsModule {
};
exports.EventsModule = EventsModule;
exports.EventsModule = EventsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule,
            sequelize_1.SequelizeModule.forFeature([event_model_1.Event, event_participant_model_1.EventParticipant, arc_island_model_1.ArcIsland, character_version_model_1.CharacterVersion, character_model_1.Character]),
            sequelize_1.SequelizeModule.forFeature([event_read_model_1.EventRead, event_participant_read_model_1.EventParticipantRead, arc_island_read_model_1.ArcIslandRead, character_version_read_model_1.CharacterVersionRead, character_read_model_1.CharacterRead], 'read-db'),
        ],
        controllers: [events_controller_1.EventsController],
        providers: [
            events_service_1.EventsService,
            ...CommandHandlers,
            ...QueryHandlers,
        ],
        exports: [events_service_1.EventsService],
    })
], EventsModule);
//# sourceMappingURL=events.module.js.map