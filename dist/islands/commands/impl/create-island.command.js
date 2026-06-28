"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIslandCommand = void 0;
class CreateIslandCommand {
    constructor(name, description, arc_ids, coordinate_x, coordinate_y, coordinate_z, model_url, thumbnail_url, is_active) {
        this.name = name;
        this.description = description;
        this.arc_ids = arc_ids;
        this.coordinate_x = coordinate_x;
        this.coordinate_y = coordinate_y;
        this.coordinate_z = coordinate_z;
        this.model_url = model_url;
        this.thumbnail_url = thumbnail_url;
        this.is_active = is_active;
    }
}
exports.CreateIslandCommand = CreateIslandCommand;
//# sourceMappingURL=create-island.command.js.map