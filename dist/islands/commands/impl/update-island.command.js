"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateIslandCommand = void 0;
class UpdateIslandCommand {
    constructor(id, name, description, arc_ids, coordinate_x, coordinate_y, coordinate_z, model_url, thumbnail_url, is_active, rotation_y, scale) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.arc_ids = arc_ids;
        this.coordinate_x = coordinate_x;
        this.coordinate_y = coordinate_y;
        this.coordinate_z = coordinate_z;
        this.model_url = model_url;
        this.thumbnail_url = thumbnail_url;
        this.is_active = is_active;
        this.rotation_y = rotation_y;
        this.scale = scale;
    }
}
exports.UpdateIslandCommand = UpdateIslandCommand;
//# sourceMappingURL=update-island.command.js.map