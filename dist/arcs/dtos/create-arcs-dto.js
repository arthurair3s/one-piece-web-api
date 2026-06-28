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
exports.CreateArcDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateArcDto {
}
exports.CreateArcDto = CreateArcDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Alabasta', description: 'Nome do arco' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateArcDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'O arco em que os Chapéus de Palha ajudam Vivi a salvar seu reino de Crocodile.', description: 'Descrição detalhada do arco' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateArcDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID da saga à qual o arco pertence' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateArcDto.prototype, "saga_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Ordem cronológica do arco dentro da saga' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateArcDto.prototype, "order", void 0);
//# sourceMappingURL=create-arcs-dto.js.map