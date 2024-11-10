import services from "../data/services";
import { SectionTitle } from "./SectionTitle";
import { ServiceItem } from "./ServiceItem";

export const Services = () => {
  return (
    <div id="services" className="h-auto md:h-screen flex flex-col justify-center">
      <SectionTitle className="mt-10">My Services</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 show__component">
        {
          services.map(( service ) => (
            <ServiceItem
              key={ service.title }
              title={ service.title }
              icon={ service.icon }
              description={ service.description }
            ></ServiceItem>
          ))
        }
      </div>
    </div>
  );
};