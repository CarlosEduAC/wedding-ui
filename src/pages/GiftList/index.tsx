import { useEffect, useState, Fragment } from "react";
import Cards from "@/components/ui/Cards";
import { Header, Footer } from "@/components/layout";
import { Background } from "@/pages/Home/styles";
import { Search } from "@/components/ui/Search";
import { SortBy } from "@/components/ui/SortBy";
import { FaSearch } from "react-icons/fa";
import { Container, SubTitle, Filters, SearchMobileContainer } from "./styles";
import LogoImg from "@/assets/logo.png";
import { Item } from "@/models/Cart";
import api from "../../services/wedding-api";
import { useWindow } from "@/hooks/useWindowDimension";
import { Hearts } from "react-loader-spinner";

function GiftList() {
  const [items, setItems] = useState<Item[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [filter, setFilter] = useState<string>("");
  const { windowWidth } = useWindow();

  useEffect(() => {
    async function getItemInfo() {
      const response = await api.get("products");

      setItems(response.data);
      setTotalItems(response.data.length);
    }

    getItemInfo();
  }, []);

  return (
    <Background>
      <Header LogoImg={LogoImg} />

      <Container>
        <SubTitle $isMobile={windowWidth <= 490}>
          <p>Dê um presente para Polyana & Carlos Eduardo.</p>
          <p>Torne esse dia ainda mais especial!</p>
        </SubTitle>

        <Filters>
          {windowWidth <= 490 ? (
            <SearchMobileContainer>
              <Search
                icon={FaSearch}
                name="search"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />

              <p>
                {totalItems
                  ? `${totalItems} produtos encontrados`
                  : "Nenhum produto encontrado"}
              </p>
            </SearchMobileContainer>
          ) : (
            <Fragment>
              <p>
                {totalItems
                  ? `${totalItems} produtos encontrados`
                  : "Nenhum produto encontrado"}
              </p>
              <Search
                icon={FaSearch}
                name="search"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
              <SortBy />
            </Fragment>
          )}
        </Filters>

        {items.length > 0 ? (
          <Cards items={items} filter={filter} />
        ) : (
          <Hearts
            height="380"
            width="380"
            color="#BE3A4E"
            ariaLabel="hearts-loading"
            visible={true}
          />
        )}
      </Container>

      <Footer />
    </Background>
  );
}

export default GiftList;
