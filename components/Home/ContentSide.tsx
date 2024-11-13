import React from 'react'
import Breadcrumb from '../Breadcrumb'
import Title from '../Title'
import Paragraph from '../Paragraph'
import { TextParagraph, informationData } from '@/data'
import InformationCard from '../InformationCard'

type TProps = {
    list: string[]
}

const ContentSide = ({list}: TProps) => {
  return (
    <div className="w-l flex flex-col justify-start gap-8">
        <Title text="Марина Гриндер"/>
        <Breadcrumb items={list}/>
        <Paragraph text={TextParagraph}/>
        <InformationCard data={informationData}/>
    </div>
  )
}

export default ContentSide