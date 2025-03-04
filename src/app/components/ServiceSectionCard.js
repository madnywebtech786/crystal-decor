import Image from 'next/image';
import { services } from '../constants/servicesData';

const ServiceSectionCard = ({ name, index }) => {
  const isEven = index % 2 === 0;
  const service=services[name]

  return (
    <div
      className={`p-4 md:p-6 lg:p-10 rounded-lg flex items-center relative flex-col-reverse lg:flex-row gap-10 lg:gap-0  ${
        isEven ? 'lg:flex-row-reverse' : ''
      } bg-primaryExtraLight`}
    >
       <Image
          src={'/images/serviceBg.png'}
          alt={`service background`}
          width={1200}
          height={900}
          className='w-full h-full absolute top-0 left-0 opacity-30 z-10'
        />
      <div className='w-full lg:w-1/2 flex justify-center z-20'>
        <Image
          src={`/images/services/service${index+1}.png`}
          alt={`${name} service`}
          width={450}
          height={450}
          className='w-full md:w-3/4 aspect-auto  rounded-lg'
        />
      </div>
      <div className='w-full lg:w-1/2 h-full z-20'>
        <div className='bg-white rounded-lg p-6 flex flex-col gap-5 h-full'>
          <h2 className='text-secondary text-6xl font-bold capitalize fancy-text text-center'>{name}</h2>
          <p className='text-sm text-gray-400'>{service.desc}</p>
          <div className='flex flex-col gap-3 mt-3'>
            <h4 className='text-2xl font-bold'>Key Features</h4>
            {service.attributes?.length > 0 && (
              <ul className=''>
                {service.attributes.map((attribute, index) => (
                  <li key={index} className='text-sm text-gray-700 mb-2 before:content-["✔"] before:pr-2 before:text-primary before:font-bold'>
                    {attribute}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSectionCard;
