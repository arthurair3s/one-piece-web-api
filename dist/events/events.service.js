"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const create_event_command_1 = require("./commands/impl/create-event.command");
const create_events_bulk_command_1 = require("./commands/impl/create-events-bulk.command");
const update_event_command_1 = require("./commands/impl/update-event.command");
const delete_event_command_1 = require("./commands/impl/delete-event.command");
const add_participant_to_event_command_1 = require("./commands/impl/add-participant-to-event.command");
const remove_participant_from_event_command_1 = require("./commands/impl/remove-participant-from-event.command");
const get_events_query_1 = require("./queries/impl/get-events.query");
const get_event_by_id_query_1 = require("./queries/impl/get-event-by-id.query");
const get_event_participants_query_1 = require("./queries/impl/get-event-participants.query");
let EventsService = class EventsService {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    create(dto) {
        return this.commandBus.execute(new create_event_command_1.CreateEventCommand(dto.arcIslandId, dto.title, dto.type, dto.description, dto.order));
    }
    createBulk(dtos) {
        return this.commandBus.execute(new create_events_bulk_command_1.CreateEventsBulkCommand(dtos));
    }
    findAll(query) {
        return this.queryBus.execute(new get_events_query_1.GetEventsQuery(query.page, query.limit, query.arcIslandId, query.type));
    }
    findOne(id) {
        return this.queryBus.execute(new get_event_by_id_query_1.GetEventByIdQuery(id));
    }
    update(id, dto) {
        return this.commandBus.execute(new update_event_command_1.UpdateEventCommand(id, dto.arcIslandId, dto.title, dto.type, dto.description, dto.order));
    }
    remove(id) {
        return this.commandBus.execute(new delete_event_command_1.DeleteEventCommand(id));
    }
    addParticipant(event_id, character_version_id) {
        return this.commandBus.execute(new add_participant_to_event_command_1.AddParticipantToEventCommand(event_id, character_version_id));
    }
    removeParticipant(event_id, character_version_id) {
        return this.commandBus.execute(new remove_participant_from_event_command_1.RemoveParticipantFromEventCommand(event_id, character_version_id));
    }
    getParticipants(event_id) {
        return this.queryBus.execute(new get_event_participants_query_1.GetEventParticipantsQuery(event_id));
    }
};
exports.EventsService = EventsService;
exports.EventsService = EventsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], EventsService);
//# sourceMappingURL=events.service.js.map