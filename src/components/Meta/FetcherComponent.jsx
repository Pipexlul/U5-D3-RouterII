const FetcherComponent = ({ isLoading, loadingComp, dataComp }) => {
  return isLoading ? loadingComp : dataComp;
};

export default FetcherComponent;
