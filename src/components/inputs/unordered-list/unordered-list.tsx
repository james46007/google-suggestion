import React from 'react';
import {Prediction} from '../../../interfaces/IPredictions';
import {UnorderedListComponentProps} from "../../../interfaces/IUnorderedList";

const UnorderedListComponent: React.FC<UnorderedListComponentProps> = ({predictions, openModal}) => {
  return (
    <>
      <ul className="text-lg font-bold w-full bg-white">
        {predictions.map(({description, structured_formatting}: Prediction, index: number) => (
          <li
            key={index}
            className="border-t border-gray-300"
            onClick={() => openModal(description)}
          >
            <div className="flex items-center p-3">
              <div className="mr-5">
                <img src="/assets/icons/map-pin-gray.png" alt="nada" width={13} height={20}/>
              </div>
              <div>
                <h1 className="text-left text-base font-bold mb-2">{structured_formatting.main_text}</h1>
                <h1
                  className="text-left text-sm font-bold text-[#9098a4ff] mb-2">{structured_formatting.secondary_text}</h1>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UnorderedListComponent;
