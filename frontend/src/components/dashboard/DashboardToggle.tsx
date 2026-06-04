import { Link } from 'react-router-dom';
import { Brain, LayoutDashboard } from 'lucide-react';
import { motion } from 'framer-motion';

import { cn } from '../../lib/cn';

export function DashboardToggle({
  isPro,
  aiMode,
  setAiMode,
  showUpgradeLink = true,
}: {
  isPro: boolean;
  aiMode: boolean;
  setAiMode: (value: boolean) => void;
  showUpgradeLink?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="relative"
    >
      {isPro ? (
        <div>
          <button
            type="button"
            className={cn(
              'inline-flex h-11 items-center gap-2 rounded-full border px-4 text-sm font-black shadow-lg backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2',
              aiMode
                ? 'border-slate-950 bg-slate-950 text-white shadow-slate-900/20 focus:ring-slate-300 hover:bg-slate-800 dark:border-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100'
                : 'border-emerald-400 bg-white/90 text-emerald-700 shadow-emerald-600/15 focus:ring-emerald-300 hover:border-emerald-500 hover:bg-emerald-50 dark:border-emerald-400/70 dark:bg-white/10 dark:text-emerald-200 dark:hover:bg-emerald-500/10',
            )}
            onClick={() => setAiMode(!aiMode)}
            aria-pressed={aiMode}
            title={aiMode ? 'Switch to Classic Dashboard' : 'Generate AI Summary'}
          >
            <span className={cn('grid h-7 w-7 place-items-center rounded-full', aiMode ? 'bg-white/15 text-white dark:bg-slate-950/10 dark:text-slate-950' : 'bg-emerald-100 text-emerald-700')}>
              {aiMode ? <LayoutDashboard className="h-4 w-4" /> : <Brain className="h-4 w-4" />}
            </span>
            <span>{aiMode ? 'Classic Dashboard' : 'AI Insights'}</span>
          </button>
        </div>
      ) : showUpgradeLink ? (
        <Link to="/upgrade" className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 text-sm font-black text-white shadow-lg shadow-purple-600/20 transition hover:-translate-y-0.5">
          <Brain className="h-4 w-4" />
          Upgrade to Pro
        </Link>
      ) : null}
    </motion.div>
  );
}
