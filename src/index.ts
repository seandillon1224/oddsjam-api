import axios from 'axios';
import { createURL } from './constants.js';
import { createUrlWithParams } from './formatParams.js';
import {
  Future,
  FutureOdds,
  FuturesAPIParams,
  FuturesOddsAPIParams,
  Game,
  GameOdds,
  GameOddsAPIParams,
  GamesAPIParams,
  Leagues,
  LeaguesAPIParams,
  Markets,
  MarketsAPIParams,
  Score,
  ScoresAPIParams,
} from './types';

const OddsJamClient = (apiKey: string) => {
  const baseUrl = createURL(apiKey);

  // Get Games API Function
  const getGames = async (params?: GamesAPIParams) => {
    const gamesURL = baseUrl('games');
    const fullURL = createUrlWithParams(gamesURL, params);
    const res = await axios.get(fullURL);
    return res.data as Game;
  };

  // Get Leagues API Function
  const getLeagues = async (params?: LeaguesAPIParams) => {
    const leaguesURL = baseUrl('leagues');
    const fullURL = createUrlWithParams(leaguesURL, params);
    const res = await axios.get(fullURL);
    return res.data as Leagues;
  };

  // Get Markets API Function
  const getMarkets = async (params?: MarketsAPIParams) => {
    const marketsURL = baseUrl('markets');
    const fullURL = createUrlWithParams(marketsURL, params);
    const res = await axios.get(fullURL);
    return res.data as Markets;
  };

  // Get Game Odds API Function
  const getGameOdds = async (params?: GameOddsAPIParams) => {
    const gameOddsURL = baseUrl('game-odds');
    const fullURL = createUrlWithParams(gameOddsURL, params);
    const res = await axios.get(fullURL);
    return res.data as GameOdds;
  };

  // Get Futures API Function
  const getFutures = async (params?: FuturesAPIParams) => {
    const futuresURL = baseUrl('futures');
    const fullURL = createUrlWithParams(futuresURL, params);
    const res = await axios.get(fullURL);
    return res.data as Future;
  };

  // Get Future Odds API Function
  const getFutureOdds = async (params?: FuturesOddsAPIParams) => {
    const futureOddsURL = baseUrl('future-odds');
    const fullURL = createUrlWithParams(futureOddsURL, params);
    const res = await axios.get(fullURL);
    return res.data as FutureOdds;
  };

  // Get Scores API Function
  const getScores = async (params?: ScoresAPIParams) => {
    const scoresURL = baseUrl('scores');
    const fullURL = createUrlWithParams(scoresURL, params);
    const res = await axios.get(fullURL);
    return res.data as Score;
  };

  return {
    getGames,
    getLeagues,
    getMarkets,
    getGameOdds,
    getFutures,
    getFutureOdds,
    getScores,
  };
};

export default OddsJamClient;
