import { Field, ObjectType } from '@nestjs/graphql'
import { Review as ReviewType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Review implements RestrictProperties<Review, ReviewType> {
  id: number
  createdAt: Date
  updatedAt: Date
  customerId: string
  garageId: number
  rating: number
  @Field({ nullable: true })
  comment: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
