import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTeams } from "../../feature/Teams/teams-thunk";
import {
  Container,
  ItemContainer,
  Name,
  Image,
  List,
  Title,
  Logo,
  Row,
  Subtitle,
  ChartContainer,
  Centered,
  Content,
  ChartContent,
} from "./styles";

import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import BeatLoader from "react-spinners/BeatLoader";
import theme from "../../global/theme";

import logo from "../../assets/logo.png";
import useWindowDimensions from "../../hooks/useWindowsDimensions";
import {
  onHandleChartHeight,
  onHandleChartWidth,
} from "../../helpers/responsivityCChartSize";

const Home = () => {
  const { height, width } = useWindowDimensions();
  const [chartData, setCharData] = useState([]);
  const [teamName, setTeamName] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [chartWidth, setChartWidth] = useState(null);
  const [chartHeight, setChartHeight] = useState(null);

  console.log(height, width);
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.teams);

  useEffect(() => {
    const w = onHandleChartWidth(width);
    setChartWidth(w);
    const h = onHandleChartHeight(width);
    setChartHeight(h);
  }, [width]);

  useEffect(() => {
    fetchTeams();
  }, []);

  useEffect(() => {
    setIsloading(true);
    setTimeout(() => {
      onHandleDataChart("Manchester United");
    }, 1500);
  }, [data]);

  const fetchTeams = () => {
    try {
      dispatch(fetchAllTeams());
    } catch (error) {
      console.error(error);
    }
  };

  const onHandleDataChart = (name) => {
    const filterByName = data?.result?.find((item) => item.name === name);

    const obj = [
      {
        name: "home",
        home: filterByName.goals.for.total.home,
      },
      {
        name: "away",
        away: filterByName.goals.for.total.away,
      },
      {
        name: "total",
        total: filterByName.goals.for.total.total,
      },
    ];

    setCharData(obj);
    setTeamName(name);
    if (data) {
      setIsloading(false);
    }
  };

  const Item = ({ name, src, alt }) => (
    <ItemContainer onClick={() => onHandleDataChart(name)}>
      <Image src={src} alt={alt} />
      <Name>{name}</Name>
    </ItemContainer>
  );

  if (isLoading) {
    return (
      <Centered>
        <BeatLoader color={theme.colors.ice} />
      </Centered>
    );
  }

  return (
    <Container>
      <Row>
        <Logo src={logo} alt="logo" />
        <Title>Teams Goals</Title>
      </Row>

      <Content>
        <List>
          {data?.result?.map((item) => (
            <Item name={item.name} src={item.logo} alt={item.name} />
          ))}
        </List>

        <ChartContent>
          <Subtitle>Number of goals last season</Subtitle>

          <Title>{teamName}</Title>

          <ChartContainer>
            <BarChart width={chartWidth} height={chartHeight} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke={theme.colors.ice} />
              <XAxis dataKey="name" stroke={theme.colors.ice} />
              <YAxis stroke={theme.colors.ice} />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="home"
                fill={theme.colors.primary}
                barSize={chartWidth > 768 ? 60 : null}
              />
              <Bar
                dataKey="away"
                fill={theme.colors.secondary}
                barSize={chartWidth > 768 ? 60 : null}
              />
              <Bar
                dataKey="total"
                fill={theme.colors.blue}
                barSize={chartWidth > 768 ? 60 : null}
              />
            </BarChart>
          </ChartContainer>
        </ChartContent>
      </Content>
    </Container>
  );
};

export default Home;
