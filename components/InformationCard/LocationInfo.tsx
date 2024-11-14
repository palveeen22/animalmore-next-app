interface LocationInfoProps {
  country: string;
  location: string;
}

const LocationInfo = ({ country, location }: LocationInfoProps) => {
  return (
    <div className='flex flex-col text-primary font-medium text-[16px] leading-[16px]'>
      <span>{country},</span>
      <span>{location}</span>
    </div>
  );
};

export default LocationInfo;