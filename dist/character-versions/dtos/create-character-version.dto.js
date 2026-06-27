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
exports.CreateCharacterVersionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const character_status_enum_1 = require("../../common/enums/character-status.enum");
class CreateCharacterVersionDto {
}
exports.CreateCharacterVersionDto = CreateCharacterVersionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID do personagem base' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateCharacterVersionDto.prototype, "character_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [1, 2], description: 'IDs dos arcos onde esta versão é válida', isArray: true }),
    (0, class_validator_1.IsInt)({ each: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], CreateCharacterVersionDto.prototype, "arc_ids", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Sogeking', description: 'Nome utilizado no contexto' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCharacterVersionDto.prototype, "alias", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'O Rei dos Atiradores', description: 'Título utilizado no contexto' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCharacterVersionDto.prototype, "epithet", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 30000000, description: 'Recompensa do personagem neste arco' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCharacterVersionDto.prototype, "bounty", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Status de vida do personagem no contexto do arco',
        enum: character_status_enum_1.CharacterStatus,
        default: character_status_enum_1.CharacterStatus.ALIVE,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(character_status_enum_1.CharacterStatus),
    __metadata("design:type", String)
], CreateCharacterVersionDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'http://image.url/luffy.png', description: 'URL da imagem' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateCharacterVersionDto.prototype, "image_url", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Sua primeira aparição', description: 'Descrição da versão' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCharacterVersionDto.prototype, "description", void 0);
//# sourceMappingURL=create-character-version.dto.js.map