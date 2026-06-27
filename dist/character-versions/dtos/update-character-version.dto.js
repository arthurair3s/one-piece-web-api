"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCharacterVersionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_character_version_dto_1 = require("./create-character-version.dto");
class UpdateCharacterVersionDto extends (0, swagger_1.PartialType)(create_character_version_dto_1.CreateCharacterVersionDto) {
}
exports.UpdateCharacterVersionDto = UpdateCharacterVersionDto;
//# sourceMappingURL=update-character-version.dto.js.map