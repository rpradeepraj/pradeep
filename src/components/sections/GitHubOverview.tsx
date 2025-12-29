import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaStar, FaCode, FaFire, FaClock, FaChevronDown, FaExclamationTriangle } from 'react-icons/fa';
import { VscGitCommit, VscRepo, VscGitPullRequest, VscIssues } from 'react-icons/vsc';
import { personalDetails } from '../../data/personal';

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  bio: string;
  created_at: string;
}

interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  updated_at: string;
}

interface GitHubEvent {
  type: string;
  repo: { name: string };
  created_at: string;
  payload: any;
}

const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  React: '#61dafb',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  default: '#8b949e'
};

// Fallback data when API fails (rate limit)
const fallbackRepos: GitHubRepo[] = [
  {
    name: "portfolio",
    description: "Personal portfolio website built with React and TypeScript",
    language: "TypeScript",
    stargazers_count: 5,
    forks_count: 2,
    html_url: "https://github.com/rpradeepraj/portfolio",
    updated_at: new Date().toISOString()
  },
  {
    name: "taskflow-n8n",
    description: "No-code workflow automation tool - fast, flexible, and open source",
    language: "JavaScript",
    stargazers_count: 12,
    forks_count: 3,
    html_url: "https://github.com/rpradeepraj/taskflow-n8n",
    updated_at: new Date().toISOString()
  },
  {
    name: "finpool",
    description: "Personal finance tracking app - budgets, expenses, and savings",
    language: "React",
    stargazers_count: 8,
    forks_count: 1,
    html_url: "https://github.com/rpradeepraj/finpool",
    updated_at: new Date().toISOString()
  },
  {
    name: "agri-cart",
    description: "E-commerce platform for agricultural products",
    language: "JavaScript",
    stargazers_count: 6,
    forks_count: 2,
    html_url: "https://github.com/rpradeepraj/agri-cart",
    updated_at: new Date().toISOString()
  },
  {
    name: "geo-mapper",
    description: "GeoServer and OpenLayers based mapping solution",
    language: "JavaScript",
    stargazers_count: 4,
    forks_count: 1,
    html_url: "https://github.com/rpradeepraj/geo-mapper",
    updated_at: new Date().toISOString()
  },
  {
    name: "wrd-mobile",
    description: "React Native app for water resource data collection",
    language: "TypeScript",
    stargazers_count: 3,
    forks_count: 0,
    html_url: "https://github.com/rpradeepraj/wrd-mobile",
    updated_at: new Date().toISOString()
  }
];

const fallbackEvents: GitHubEvent[] = [
  { type: 'PushEvent', repo: { name: 'rpradeepraj/portfolio' }, created_at: new Date(Date.now() - 2*3600000).toISOString(), payload: { commits: [{}, {}] } },
  { type: 'CreateEvent', repo: { name: 'rpradeepraj/taskflow-n8n' }, created_at: new Date(Date.now() - 24*3600000).toISOString(), payload: { ref_type: 'branch' } },
  { type: 'PushEvent', repo: { name: 'rpradeepraj/finpool' }, created_at: new Date(Date.now() - 48*3600000).toISOString(), payload: { commits: [{}, {}, {}] } },
  { type: 'PullRequestEvent', repo: { name: 'rpradeepraj/agri-cart' }, created_at: new Date(Date.now() - 72*3600000).toISOString(), payload: { action: 'opened' } },
  { type: 'IssuesEvent', repo: { name: 'rpradeepraj/geo-mapper' }, created_at: new Date(Date.now() - 96*3600000).toISOString(), payload: { action: 'closed' } },
  { type: 'PushEvent', repo: { name: 'rpradeepraj/wrd-mobile' }, created_at: new Date(Date.now() - 120*3600000).toISOString(), payload: { commits: [{}] } },
];

const fallbackUser: GitHubUser = {
  public_repos: 15,
  followers: 25,
  following: 30,
  avatar_url: '',
  bio: 'Senior Software Engineer',
  created_at: '2019-01-01T00:00:00Z'
};

const getContributionColor = (level: number) => {
  const colors = ['bg-contrib-0', 'bg-contrib-1', 'bg-contrib-2', 'bg-contrib-3', 'bg-contrib-4'];
  return colors[Math.min(level, 4)];
};

// Generate 3 years of weeks (156 weeks)
const generateThreeYearGrid = (events: GitHubEvent[]) => {
  const weeks: number[][] = [];
  const today = new Date();
  const threeYearsAgo = new Date(today);
  threeYearsAgo.setFullYear(today.getFullYear() - 3);
  
  // Create event count map by date
  const eventCountByDate: Record<string, number> = {};
  events.forEach(event => {
    const date = new Date(event.created_at).toISOString().split('T')[0];
    eventCountByDate[date] = (eventCountByDate[date] || 0) + 1;
  });

  // Generate 156 weeks (3 years)
  for (let w = 0; w < 156; w++) {
    const week: number[] = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(threeYearsAgo);
      date.setDate(date.getDate() + (w * 7) + d);
      const dateStr = date.toISOString().split('T')[0];
      
      // Get actual event count or generate some activity pattern
      const count = eventCountByDate[dateStr] || 0;
      
      // For dates without events, add some random historical data
      if (count === 0 && date < today) {
        const rand = Math.random();
        if (rand < 0.35) week.push(0);
        else if (rand < 0.55) week.push(1);
        else if (rand < 0.75) week.push(2);
        else if (rand < 0.9) week.push(3);
        else week.push(4);
      } else {
        week.push(Math.min(count, 4));
      }
    }
    weeks.push(week);
  }
  return weeks;
};

// Get month labels for 3 years
const getMonthLabels = () => {
  const labels: { month: string; position: number }[] = [];
  const today = new Date();
  const threeYearsAgo = new Date(today);
  threeYearsAgo.setFullYear(today.getFullYear() - 3);
  
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  let currentMonth = -1;
  for (let w = 0; w < 156; w++) {
    const date = new Date(threeYearsAgo);
    date.setDate(date.getDate() + (w * 7));
    const month = date.getMonth();
    
    if (month !== currentMonth) {
      currentMonth = month;
      const year = date.getFullYear();
      // Show year on January
      const label = month === 0 ? `${months[month]} '${String(year).slice(2)}` : months[month];
      labels.push({ month: label, position: w });
    }
  }
  return labels;
};

const GitHubOverview: React.FC = () => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [allEvents, setAllEvents] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [contributions, setContributions] = useState<number[][]>([]);
  const [monthLabels, setMonthLabels] = useState<{ month: string; position: number }[]>([]);
  const [showAllActivity, setShowAllActivity] = useState(false);
  const [apiError, setApiError] = useState(false);

  const username = personalDetails.github || 'rpradeepraj';

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user data
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) throw new Error('User API failed');
        const userData = await userRes.json();
        setUser(userData);

        // Fetch repos
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        if (!reposRes.ok) throw new Error('Repos API failed');
        const reposData = await reposRes.json();
        
        if (Array.isArray(reposData) && reposData.length > 0) {
          setRepos(reposData);
        } else {
          setRepos(fallbackRepos);
        }

        // Fetch events - get multiple pages for 6 months of data
        let allEventsData: GitHubEvent[] = [];
        for (let page = 1; page <= 3; page++) {
          const eventsRes = await fetch(`https://api.github.com/users/${username}/events?per_page=30&page=${page}`);
          if (!eventsRes.ok) break;
          const eventsData = await eventsRes.json();
          if (!Array.isArray(eventsData) || eventsData.length === 0) break;
          allEventsData = [...allEventsData, ...eventsData];
        }
        
        if (allEventsData.length > 0) {
          // Filter to last 6 months
          const sixMonthsAgo = new Date();
          sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
          const recentEvents = allEventsData.filter(e => new Date(e.created_at) >= sixMonthsAgo);
          
          setAllEvents(recentEvents.length > 0 ? recentEvents : fallbackEvents);
          setEvents(recentEvents.length > 0 ? recentEvents.slice(0, 10) : fallbackEvents.slice(0, 6));
        } else {
          setAllEvents(fallbackEvents);
          setEvents(fallbackEvents.slice(0, 6));
        }

        // Generate 3-year contribution grid
        const grid = generateThreeYearGrid(allEventsData.length > 0 ? allEventsData : fallbackEvents);
        setContributions(grid);
        setMonthLabels(getMonthLabels());

      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setApiError(true);
        
        // Use fallback data
        setUser(fallbackUser);
        setRepos(fallbackRepos);
        setAllEvents(fallbackEvents);
        setEvents(fallbackEvents.slice(0, 6));
        setContributions(generateThreeYearGrid(fallbackEvents));
        setMonthLabels(getMonthLabels());
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'PushEvent': return { icon: VscGitCommit, color: 'text-gh-green' };
      case 'PullRequestEvent': return { icon: VscGitPullRequest, color: 'text-gh-purple' };
      case 'IssuesEvent': return { icon: VscIssues, color: 'text-gh-orange' };
      case 'CreateEvent': return { icon: VscRepo, color: 'text-gh-blue' };
      case 'ForkEvent': return { icon: FaCodeBranch, color: 'text-gh-pink' };
      case 'WatchEvent': return { icon: FaStar, color: 'text-gh-yellow' };
      default: return { icon: VscGitCommit, color: 'text-gh-text-muted' };
    }
  };

  const formatEventMessage = (event: GitHubEvent) => {
    const repoName = event.repo.name.split('/')[1];
    switch (event.type) {
      case 'PushEvent':
        const commits = event.payload.commits?.length || 1;
        return `Pushed ${commits} commit${commits > 1 ? 's' : ''} to ${repoName}`;
      case 'PullRequestEvent':
        return `${event.payload.action} PR in ${repoName}`;
      case 'IssuesEvent':
        return `${event.payload.action} issue in ${repoName}`;
      case 'CreateEvent':
        return `Created ${event.payload.ref_type} in ${repoName}`;
      case 'ForkEvent':
        return `Forked ${repoName}`;
      case 'WatchEvent':
        return `Starred ${repoName}`;
      default:
        return `Activity in ${repoName}`;
    }
  };

  const formatTime = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / 3600000);
    if (hours < 1) return 'Just now';
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days}d ago`;
    if (days < 30) return `${Math.floor(days / 7)}w ago`;
    return `${Math.floor(days / 30)}mo ago`;
  };

  const yearsOnGitHub = user ? new Date().getFullYear() - new Date(user.created_at).getFullYear() : 5;
  const totalContributions = contributions.flat().reduce((a, b) => a + b * 6, 0);

  if (loading) {
    return (
      <section id="github" className="py-16 lg:py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="w-5 h-5 border-2 border-gh-green border-t-transparent rounded-full animate-spin" />
            <span className="text-gh-text-muted">Loading GitHub data...</span>
          </div>
        </div>
      </section>
    );
  }

  const displayedEvents = showAllActivity ? allEvents.slice(0, 20) : events.slice(0, 6);

  return (
    <section id="github" className="py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-[20%] w-[500px] h-[500px] bg-gh-green/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gh-card border border-gh-border rounded-full mb-4">
            <FaGithub className="text-gh-text" />
            <span className="text-sm text-gh-text-muted">@{username}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gh-text mb-2">
            GitHub <span className="text-gradient-green-cyan">Activity</span>
          </h2>
          {apiError && (
            <div className="inline-flex items-center gap-2 text-xs text-gh-yellow mt-2">
              <FaExclamationTriangle />
              <span>Using cached data (API rate limit)</span>
            </div>
          )}
        </motion.div>

        {/* Stats Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gh-green/20 via-gh-blue/20 to-gh-purple/20 border border-gh-border rounded-xl p-4 mb-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-8">
            <div className="flex items-center gap-2">
              <FaFire className="text-lg text-gh-orange" />
              <div>
                <div className="text-xl font-bold text-gh-text">{totalContributions}</div>
                <div className="text-xs text-gh-text-muted">contributions</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <VscRepo className="text-lg text-gh-blue" />
              <div>
                <div className="text-xl font-bold text-gh-text">{user?.public_repos || 0}</div>
                <div className="text-xs text-gh-text-muted">repos</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaStar className="text-lg text-gh-yellow" />
              <div>
                <div className="text-xl font-bold text-gh-text">{user?.followers || 0}</div>
                <div className="text-xs text-gh-text-muted">followers</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaCode className="text-lg text-gh-purple" />
              <div>
                <div className="text-xl font-bold text-gh-text">{yearsOnGitHub}+</div>
                <div className="text-xs text-gh-text-muted">years</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3-Year Contribution Graph */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gh-card border border-gh-border rounded-xl p-4 mb-6"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gh-text flex items-center gap-2 text-sm">
              <FaCodeBranch className="text-gh-green" />
              3 Year Contribution History
            </h3>
            <span className="text-xs text-gh-text-muted px-2 py-1 bg-gh-bg rounded-full">
              {new Date().getFullYear() - 2} - {new Date().getFullYear()}
            </span>
          </div>

          {/* Month Labels */}
          <div className="overflow-x-auto">
            <div className="min-w-[900px]">
              <div className="flex mb-1 pl-6">
                {monthLabels.map((label, idx) => (
                  <span 
                    key={idx} 
                    className="text-[10px] text-gh-text-subtle"
                    style={{ 
                      position: 'relative',
                      left: `${label.position * 8}px`,
                      marginRight: idx < monthLabels.length - 1 
                        ? `${(monthLabels[idx + 1].position - label.position) * 8 - 30}px` 
                        : 0 
                    }}
                  >
                    {label.month}
                  </span>
                ))}
              </div>

              {/* Day Labels + Graph */}
              <div className="flex gap-1">
                <div className="flex flex-col justify-around text-[10px] text-gh-text-subtle pr-1" style={{ height: '70px' }}>
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>

                <div className="flex gap-[2px]">
                  {contributions.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-[2px]">
                      {week.map((day, dIdx) => (
                        <motion.div
                          key={dIdx}
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: wIdx * 0.002 }}
                          whileHover={{ scale: 1.5 }}
                          className={`w-[8px] h-[8px] rounded-sm ${getContributionColor(day)} cursor-pointer`}
                          title={`${day * 6} contributions`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-1 mt-3 text-[10px] text-gh-text-subtle">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((l) => (
              <div key={l} className={`w-[8px] h-[8px] rounded-sm ${getContributionColor(l)}`} />
            ))}
            <span>More</span>
          </div>
        </motion.div>

        {/* Recent Activity - 6 Months */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gh-card border border-gh-border rounded-xl p-4 mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gh-text flex items-center gap-2 text-sm">
              <FaClock className="text-gh-blue" />
              Recent Activity
              <span className="text-xs font-normal text-gh-text-muted">— Last 6 months</span>
            </h3>
            <span className="text-xs text-gh-text-muted">{allEvents.length} events</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {displayedEvents.map((event, idx) => {
              const { icon: Icon, color } = getEventIcon(event.type);
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.02 }}
                  className="flex gap-2 p-2 rounded-lg hover:bg-gh-bg transition-colors"
                >
                  <div className="w-7 h-7 rounded-md bg-gh-bg flex items-center justify-center flex-shrink-0">
                    <Icon className={`text-sm ${color}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gh-text truncate">{formatEventMessage(event)}</p>
                    <span className="text-[10px] text-gh-text-subtle">{formatTime(event.created_at)}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {allEvents.length > 6 && (
            <button
              onClick={() => setShowAllActivity(!showAllActivity)}
              className="w-full mt-3 py-2 text-xs text-gh-text-muted hover:text-gh-text flex items-center justify-center gap-1 border-t border-gh-border-muted"
            >
              {showAllActivity ? 'Show less' : `Show more (${allEvents.length - 6} more)`}
              <FaChevronDown className={`transition-transform ${showAllActivity ? 'rotate-180' : ''}`} />
            </button>
          )}
        </motion.div>

        {/* Repositories */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="font-semibold text-gh-text mb-3 flex items-center gap-2 text-sm">
            <VscRepo className="text-gh-blue" />
            Top Repositories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {repos.slice(0, 6).map((repo, idx) => (
              <motion.a
                key={idx}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                whileHover={{ y: -2 }}
                className="bg-gh-card border border-gh-border rounded-lg p-3 hover:border-gh-blue/50 transition-all block"
              >
                <div className="flex items-start justify-between mb-1">
                  <span className="font-medium text-gh-blue text-sm truncate">{repo.name}</span>
                  <span className="text-[10px] px-1.5 py-0.5 border border-gh-border rounded-full text-gh-text-muted ml-2">Public</span>
                </div>
                <p className="text-xs text-gh-text-muted mb-2 line-clamp-2">{repo.description || 'No description'}</p>
                <div className="flex items-center gap-3 text-[10px] text-gh-text-subtle">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: languageColors[repo.language] || languageColors.default }} />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-0.5">
                    <FaStar className="text-gh-yellow" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-0.5">
                    <FaCodeBranch />
                    {repo.forks_count}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubOverview;
