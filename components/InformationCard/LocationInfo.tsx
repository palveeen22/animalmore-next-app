interface LocationInfoProps {
  country: string;
  location: string;
}

const LocationInfo = ({ country, location }: LocationInfoProps) => {
  return (
    <div className='text-primary font-medium text-[16px] leading-[16px] flex flex-col'>
      <span>{country},</span>
      <span>{location}</span>
    </div>
  );
};

export default LocationInfo;