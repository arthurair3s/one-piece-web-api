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
exports.UpdateIslandDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const arc_island_association_dto_1 = require("./arc-island-association.dto");
class UpdateIslandDto {
}
exports.UpdateIslandDto = UpdateIslandDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Marineford', description: 'Nome da ilha' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateIslandDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Sede da Marinha.', description: 'Descrição detalhada da ilha' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateIslandDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: [arc_island_association_dto_1.ArcIslandAssociationDto],
        description: 'Associações de arcos e ordem da ilha em cada um deles',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => arc_island_association_dto_1.ArcIslandAssociationDto),
    __metadata("design:type", Array)
], UpdateIslandDto.prototype, "arc_ids", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 150.0, description: 'Coordenada X no mapa 3D' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateIslandDto.prototype, "coordinate_x", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 250.0, description: 'Coordenada Y no mapa 3D' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateIslandDto.prototype, "coordinate_y", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 60.0, description: 'Coordenada Z no mapa 3D' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateIslandDto.prototype, "coordinate_z", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://models.onepiece.com/islands/marineford.glb', description: 'URL do modelo 3D da ilha' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateIslandDto.prototype, "model_url", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://images.onepiece.com/islands/marineford.jpg', description: 'URL da miniatura/imagem da ilha' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], UpdateIslandDto.prototype, "thumbnail_url", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Define se a ilha está ativa no sistema' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateIslandDto.prototype, "is_active", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: -180.0, description: 'Rotação da ilha no eixo Y (em graus)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateIslandDto.prototype, "rotation_y", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1.0, description: 'Escala do modelo 3D da ilha (multiplicador)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateIslandDto.prototype, "scale", void 0);
//# sourceMappingURL=update-island.dto.js.map