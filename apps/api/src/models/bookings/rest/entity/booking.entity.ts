import { Field } from '@nestjs/graphql'
import { $Enums, Booking } from '@prisma/client'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class BookingEntity
  implements RestrictProperties<BookingEntity, Booking>
{
  createdAt: Date
  updatedAt: Date
  id: number
  @IsOptional()
  pricePerHour: number
  @IsOptional()
  totalPrice: number
  startTime: Date
  endTime: Date
  vehicleNumber: string
  @IsOptional()
  phoneNumber: string
  @IsOptional()
  passcode: string
  @Field(() => $Enums.BookingStatus)
  status: $Enums.BookingStatus
  slotId: number
  customerId: string
}
