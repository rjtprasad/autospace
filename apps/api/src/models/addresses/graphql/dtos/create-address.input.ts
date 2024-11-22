import { InputType, OmitType, PickType } from '@nestjs/graphql'
import { Address } from '../entity/address.entity'

@InputType()
export class CreateAddressInput extends OmitType(
  Address,
  ['id', 'createdAt', 'updatedAt'],
  InputType,
) {}

@InputType()
export class CreateAddressInputWithoutGarageId extends PickType(
  CreateAddressInput,
  ['address', 'lat', 'lng'],
  InputType,
) {}
