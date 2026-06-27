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
exports.CreateIslandDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const arc_island_association_dto_1 = require("./arc-island-association.dto");
class CreateIslandDto {
}
exports.CreateIslandDto = CreateIslandDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Dawn Island', description: 'Nome da ilha' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateIslandDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'A ilha onde Luffy nasceu e cresceu.', description: 'Descrição detalhada da ilha' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateIslandDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [arc_island_association_dto_1.ArcIslandAssociationDto],
        description: 'Associações de arcos e ordem da ilha em cada um deles',
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => arc_island_association_dto_1.ArcIslandAssociationDto),
    __metadata("design:type", Array)
], CreateIslandDto.prototype, "arc_ids", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100.5, description: 'Coordenada X no mapa 3D' }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateIslandDto.prototype, "coordinate_x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 200.0, description: 'Coordenada Y no mapa 3D' }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateIslandDto.prototype, "coordinate_y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 50.2, description: 'Coordenada Z no mapa 3D' }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateIslandDto.prototype, "coordinate_z", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://models.onepiece.com/islands/dawn.glb', description: 'URL do modelo 3D da ilha' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateIslandDto.prototype, "model_url", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://images.onepiece.com/islands/dawn.jpg', description: 'URL da miniatura/imagem da ilha' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateIslandDto.prototype, "thumbnail_url", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: true, description: 'Define se a ilha está ativa no sistema' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateIslandDto.prototype, "is_active", void 0);
//# sourceMappingURL=create-island.dto.js.map