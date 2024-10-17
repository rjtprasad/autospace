import { InputType, OmitType } from '@nestjs/graphql'
import { Garage } from '../entity/garage.entity'

@InputType()
export class CreateGarageInput extends OmitType(
  Garage,
  ['id', 'createdAt', 'updatedAt'],
  InputType,
) {}
