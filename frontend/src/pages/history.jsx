import React, { useState } from 'react';
import { Navbar, Page, List, ListItem, Subnavbar, Searchbar, Block, theme, NavRight,Link } from 'framework7-react';
import { FaBell } from "react-icons/fa";

const HistoryPage = () => {
    const items = [];
    let j=340;
    for (let i = 1; i <= 31; i += 1) {
      items.push({
        title: `Date : ${i}/${1}/${2023}`,
        subtitle: `Net Calorie ${j+i*(-4)^i}`,
      });
    }
    const [vlData, setVlData] = useState({
      items: [],
    });

    const searchAll = (query, searchItems) => {
      const found = [];
      for (let i = 0; i < searchItems.length; i += 1) {
        if (
          searchItems[i].title.toLowerCase().indexOf(query.toLowerCase()) >= 0 ||
          query.trim() === ''
        )
          found.push(i);
      }
      return found; // return array with mathced indexes
    };
    const renderExternal = (vl, newData) => {
      setVlData({ ...newData });
    };
    return (
      <Page>
      
        <Navbar title="NutriSync">
        <NavRight>
          <Link iconIos="f7:bell" iconMd="material:bell" panelOpen="left">
            <FaBell className='bellIcon'/>
          </Link>
        </NavRight>
          <Subnavbar  NavRight inner={false}>
            <Searchbar searchContainer=".virtual-list" searchItem="li" searchIn=".item-title" />
          </Subnavbar>
        </Navbar>
        <div className="search">
            <Block>
                <p>Here's the history of last 30 days: </p>
            </Block>
        <List strong outlineIos insetMd dividersIos className="searchbar-not-found">
          <ListItem title="Nothing found" />
        </List>
        <List
          strong
          outlineIos
          insetMd
          dividersIos
          className="searchbar-found"
          medialList
          virtualList
          virtualListParams={{
            items,
            searchAll,
            renderExternal,
            height: theme.ios ? 63 : theme.md ? 73 : 77,
          }}
        >
          <ul>
            {vlData.items.map((item, index) => (
              <ListItem
                key={index}
                mediaItem
                link="#"
                title={item.title}
                subtitle={item.subtitle}
                style={{ top: `${vlData.topPosition}px` }}
                virtualListIndex={items.indexOf(item)}
              />
            ))}
          </ul>
        </List>
        </div>  
      </Page>
    );
}

export default HistoryPage