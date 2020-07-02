import './pages/about.css';

import Flickity from 'flickity';
import {gitURL} from "./js/constants/constants";
import {GithubApi} from "./js/modules/GithubApi";
import {CommitCard} from "./js/components/CommitCard";
import {CommitCardList} from "./js/components/CommitCardList";

const githubApi = new GithubApi(gitURL);
const flkty = new Flickity('.carousel');

githubApi.getCommits()
    .then((res) => {
        const commits = res.map((card) =>
            new CommitCard(card.commit.author.name, card.commit.author.email,
            card.commit.author.date,
            card.commit.message, card.commit.author.avatar_url, card.tree.url).card
        );
        const commitList = new CommitCardList(commits, flkty);
        commitList.render();
    });


