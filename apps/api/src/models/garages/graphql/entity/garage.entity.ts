import { Field, ObjectType } from '@nestjs/graphql'
import { Garage as GarageType, SlotType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Garage implements RestrictProperties<Garage, GarageType> {
  id: number
  createdAt: Date
  updatedAt: Date
  @Field({ nullable: true })
  displayName: string
  companyId: number
  @Field({ nullable: true })
  description: string
  images: string[]
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}

@ObjectType()
export class SlotTypeCount {
  @Field(() => SlotType)
  type: SlotType
  count?: number
}
