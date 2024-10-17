import { InputType, OmitType } from '@nestjs/graphql'
import { Address } from '../entity/address.entity'

@InputType()
export class CreateAddressInput extends OmitType(
  Address,
  ['id', 'createdAt', 'updatedAt'],
  InputType,
) {}
