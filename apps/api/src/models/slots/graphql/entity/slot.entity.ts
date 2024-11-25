import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import { $Enums, Slot as SlotType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType($Enums.SlotType, {
  name: 'SlotType',
})

@ObjectType()
export class Slot implements RestrictProperties<Slot, SlotType> {
  createdAt: Date
  updatedAt: Date
  @Field({ nullable: true })
  displayName: string
  id: number
  pricePerHour: number
  @Field(() => $Enums.SlotType)
  type: $Enums.SlotType
  @Field({ nullable: true })
  length: number
  @Field({ nullable: true })
  width: number
  @Field({ nullable: true })
  height: number
  garageId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}

@ObjectType()
export class ReturnCount {
  count: number
}
