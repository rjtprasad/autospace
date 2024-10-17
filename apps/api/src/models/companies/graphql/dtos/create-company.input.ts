import { InputType, OmitType } from '@nestjs/graphql'
import { Company } from '../entity/company.entity'

@InputType()
export class CreateCompanyInput extends OmitType(
  Company,
  ['id', 'createdAt', 'updatedAt'],
  InputType,
) {
  managerId: string
}
