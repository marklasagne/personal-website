import React, { useEffect, useState } from 'react';
import PillFilter from '../components/ProjectsPage/PillFilter';

const FilterTest = () => {
  let tags = ['food', 'fruit', 'pet', 'animal', 'vegetable']
  let items = [
    {
      id: 1,
      text: 'Banana',
      tags: ['food', 'fruit']
    },
    {
      id: 2,
      text: 'Cat',
      tags: ['pet', 'animal']
    },
    {
      id: 3,
      text: 'Brocolli ',
      tags: ['food', 'vegetable']
    },
  ]

  const [filterList, setFilterList] = useState([]);
  const [renderList, setRenderList] = useState(items);

  useEffect(() => {
    if (!filterList === undefined || !filterList.length < 1) {
      let filtered = []
      items.forEach((item) => {
        item.tags.forEach((tag) => {
          if (filterList.includes(tag)) {
            if (!filtered.includes(item)) {
              filtered.push(item);
            }
          } 
        }) 
      })
      setRenderList(filtered);
    } else {
      setRenderList(items);
    }
  }, [filterList])

return (
    <>
        {tags.map((data) => {
          return (
            <PillFilter key={data} tag={data} onClick={() => {
              if(!filterList.includes(data)) {
                setFilterList(filterList => [...filterList, data]);
              } else {
                setFilterList(filterList.filter((e) => (e !== data)));
                }
              }
            }
            />
          )
        })}

      {renderList.map((data) => {
            return (
              <h1 key={data.id}>{data.text}</h1>
            )
      })}
    </>
  );
};

export default FilterTest;

