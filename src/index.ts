import axios from 'axios';
import { createURL } from './constants';
import { createUrlWithParams } from './formatParams';
import { Future, FutureOdds, FuturesAPIParams, FuturesOddsAPIParams, Game, GameOdds, GameOddsAPIParams, GamesAPIParams, Leagues, LeaguesAPIParams, Markets, MarketsAPIParams, Score, ScoresAPIParams } from './types';

const OddsJamClient = (apiKey: string) => {
  const baseUrl = createURL(apiKey);

  // Get Games API Function
  const getGames = async (params: GamesAPIParams) => {
    const gamesURL = baseUrl('games');
    const fullURL = createUrlWithParams(gamesURL, params);
    try {
      const res: Game = await axios.get(fullURL);
      return res;
    } catch (err) {
      return err;
    }
  };

  // Get Leagues API Function
  const getLeagues = async (params: LeaguesAPIParams) => {
    const leaguesURL = baseUrl('leagues');
    const fullURL = createUrlWithParams(leaguesURL, params);
    try {
      const res: Leagues = await axios.get(fullURL);
      return res;
    } catch (err) {
      return err;
    }
  };

  // Get Markets API Function
  const getMarkets = async (params: MarketsAPIParams) => {
    const marketsURL = baseUrl('markets');
    const fullURL = createUrlWithParams(marketsURL, params);
    try {
      const res: Markets = await axios.get(fullURL);
      return res;
    } catch (err) {
      return err;
    }
  };

  // Get Game Odds API Function
  const getGameOdds = async (params: GameOddsAPIParams) => {
    const gameOddsURL = baseUrl('game-odds');
    const fullURL = createUrlWithParams(gameOddsURL, params);
    try {
      const res: GameOdds = await axios.get(fullURL);
      return res;
    } catch (err) {
      return err;
    }
  };

  // Get Futures API Function
  const getFutures = async (params: FuturesAPIParams) => {
    const futuresURL = baseUrl('futures');
    const fullURL = createUrlWithParams(futuresURL, params);
    try {
      const res: Future = await axios.get(fullURL);
      return res;
    } catch (err) {
      return err;
    }
  };

  // Get Future Odds API Function
  const getFutureOdds = async (params: FuturesOddsAPIParams) => {
    const futureOddsURL = baseUrl('future-odds');
    const fullURL = createUrlWithParams(futureOddsURL, params);
    try {
      const res: FutureOdds = await axios.get(fullURL);
      return res;
    } catch (err) {
      return err;
    }
  };

  // Get Scores API Function
  const getScores = async (params: ScoresAPIParams) => {
    const scoresURL = baseUrl('scores');
    const fullURL = createUrlWithParams(scoresURL, params);
    try {
      const res: Score = await axios.get(fullURL);
      return res;
    } catch (err) {
      return err;
    }
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

const client = OddsJamClient('yeeet');
client.getGames({ isLive: 1, sport: ['boxing', 'esports'] });
