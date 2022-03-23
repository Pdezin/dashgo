import { Header } from "../components/Header";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";

/*
  Chart é uma biblioteca externa. Sabemos também que o next renderiza pelo servidor 
  a página e entrega de forma pronta. Mas isso não funcionará com os Charts (vai dar erro),
  então faz o import usando dynamic, conteúdo que sempre será carregado somente no browser.
  SSR tem que ser setado como falso!
*/

// Carregamento dinâmico
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const series = [{ name: "series1", data: [31, 120, 10, 28, 51, 18, 109] }];

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2022-03-08T00:00.000z",
      "2022-03-09T00:00.000z",
      "2022-03-10T00:00.000z",
      "2022-03-11T00:00.000z",
      "2022-03-12T00:00.000z",
      "2022-03-13T00:00.000z",
      "2022-03-14T00:00.000z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box
            p={["4", "6", "8"]}
            bg="gray.800"
            borderRadius="8"
            pb="4"
            overflow="hidden"
          >
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius="8"
            pb="4"
            overflow="hidden"
          >
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
