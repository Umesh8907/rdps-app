"use client";

import * as React from "react";
import {
  Settings,
  Database,
  Shield,
  Key,
  Download,
  HardHat,
  CheckCircle2,
  Server,
  RefreshCw,
  ExternalLink,
  Lock,
} from "lucide-react";

export default function AdminSettingsPage() {
  const [stats, setStats] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("/api/admin/stats")
      .then((res) => res.json())
      .then((data) => {
        setStats(data.stats);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Settings Header */}
      <div className="bg-[#0B132B] border border-slate-800 p-6 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">System & Portal Settings</h2>
            <p className="text-xs text-slate-400">Database health, credentials configuration, and data exports</p>
          </div>
        </div>
      </div>

      {/* Grid: Database Status + Security Config */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Database Health Card */}
        <div className="bg-[#0B132B] border border-slate-800 p-6 rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-amber-400" />
              <h3 className="text-sm font-bold text-white">Database Status</h3>
            </div>
            <span
              className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${
                stats?.dbConnected
                  ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                  : "bg-amber-500/15 text-amber-300 border-amber-500/30"
              }`}
            >
              {stats?.dbConnected ? "Neon Live Connected" : "In-Memory Dev Mode"}
            </span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            {stats?.dbConnected
              ? "All quotation requests, contacts, and logs are actively persisting to Neon Serverless PostgreSQL with auto-migrated schema."
              : "Running in rapid development mode. Submissions are temporarily held in memory. Add DATABASE_URL to your .env to enable permanent cloud Postgres persistence."}
          </p>

          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
            <div className="flex justify-between text-slate-400">
              <span>Database Engine:</span>
              <span className="text-white font-semibold">Neon PostgreSQL (Serverless)</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Quotations in System:</span>
              <span className="text-amber-400 font-bold">{stats?.quotations?.total || 0}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Contact Inquiries:</span>
              <span className="text-purple-400 font-bold">{stats?.contacts?.total || 0}</span>
            </div>
          </div>
        </div>

        {/* Security & Authentication */}
        <div className="bg-[#0B132B] border border-slate-800 p-6 rounded-2xl space-y-4">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-amber-400" />
            <h3 className="text-sm font-bold text-white">Authentication & Admin Access</h3>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Admin sessions use cryptographic HMAC-SHA256 JWT tokens secured in HTTP-only cookies with a 7-day expiration.
          </p>

          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
            <div className="flex justify-between text-slate-400">
              <span>Configured Admin Email:</span>
              <span className="text-white font-mono">admin@rdps.in</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Session Type:</span>
              <span className="text-emerald-400 font-semibold">HTTP-Only Signed Cookie</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Role:</span>
              <span className="text-amber-300 font-semibold">Superadmin</span>
            </div>
          </div>
        </div>
      </div>

      {/* Raw Data Export */}
      <div className="bg-[#0B132B] border border-slate-800 p-6 rounded-2xl space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-white">Data Export & Backup</h3>
            <p className="text-xs text-slate-400">Export your customer leads and inquiry logs to Excel or CSV format.</p>
          </div>
          <a
            href="/api/admin/quotations/export"
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-colors shadow-md shadow-amber-500/20"
          >
            <Download className="w-4 h-4" />
            <span>Download All Quotations (.csv)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
