import { ValetAssignment } from '@prisma/client'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ValetAssignmentEntity
  implements RestrictProperties<ValetAssignmentEntity, ValetAssignment>
{
  createdAt: Date
  updatedAt: Date
  bookingId: number
  pickupLat: number
  pickupLng: number
  @IsOptional()
  returnLat: number
  @IsOptional()
  returnLng: number
  pickupValetId: string
  returnValetId: string
}
