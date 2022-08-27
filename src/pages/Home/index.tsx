import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {GetCatsRequest} from '../../services/catServices';
import CatItem from './CatItem';
import {Header, Skeleton, Search} from '../../components';

import styles from './styles';

const App = () => {
  const [cats, setCats] = useState<CatResponse[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');

  const getUsers = async () => {
    setIsLoading(true);
    const res = await GetCatsRequest(`?page=${currentPage}&limit=10`);
    setCats([...cats, ...res]);
    setIsLoading(false);
  };

  const onChangeText = (e: string) => {
    setSearch(e);
  };

  const onSearchButton = async () => {
    if (search.trim() !== '' || search === undefined || search === null) {
      setIsLoading(true);
      const res = await GetCatsRequest(`search/?q=${search.trim()}`);
      setCats([...res]);
      setIsLoading(false);
    }
    if (search.trim() === '') {
      getUsers();
    }
  };

  const renderItem = (props: renderItemProps) => {
    const {item} = props;
    return (
      <CatItem name={item.name} origin={item.origin} image={item?.image?.url} />
    );
  };

  const renderLoader = () => {
    return isLoading ? (
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    ) : null;
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (search === '' || search !== undefined || search !== null) {
      getUsers();
    }
  }, [search.trim() === '' ? currentPage : null]);

  return (
    <>
      <View style={styles.page}>
        <Header text={'List Cats'} />
        <View style={styles.content}>
          <Search
            title="search"
            valueText={search}
            onChangeText={onChangeText}
            onSearchButton={onSearchButton}
          />
          <FlatList
            data={cats}
            renderItem={renderItem}
            keyExtractor={item => item?.image?.url}
            ListFooterComponent={renderLoader}
            onEndReached={loadMoreItem}
            onEndReachedThreshold={1}
          />
        </View>
      </View>
    </>
  );
};

export default App;
