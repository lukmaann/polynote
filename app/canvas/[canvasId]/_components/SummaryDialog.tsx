"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Sparkles,
  FileText,
  Copy,
  X,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

interface SummaryDialogProps {
  open: boolean;
  onClose: () => void;
  summary: string | null;
  loading?: boolean;
}

export function SummaryDialog({
  open,
  onClose,
  summary,
  loading,
}: SummaryDialogProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (summary) {
      try {
        await navigator.clipboard.writeText(summary);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="
          sm:max-w-lg max-h-[90vh]
          bg-white/80 dark:bg-neutral-900/80
          backdrop-blur-xl border border-gray-200/60 dark:border-gray-800/60
          rounded-2xl shadow-xl shadow-gray-200/40 dark:shadow-black/40
          overflow-hidden p-0
          transition-all duration-300
          animate-in fade-in-50 zoom-in-95
        "
      >
        {/* Header */}
        <DialogHeader
          className="
            bg-gradient-to-r from-purple-100/40 via-blue-100/40 to-purple-100/40
            dark:from-purple-800/10 dark:via-blue-800/10 dark:to-purple-800/10
            border-b border-gray-200/60 dark:border-gray-800/60
            px-5 py-3
          "
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-md shadow-purple-500/30">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <div>
                <DialogTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  AI Summary
                  <div className="flex items-center gap-1 bg-purple-500/10 text-purple-600 dark:text-purple-300 px-2 py-0.5 rounded-full text-xs font-medium">
                    <Sparkles className="w-3 h-3" />
                    AI
                  </div>
                </DialogTitle>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        {/* Content */}
        <div className="p-5 overflow-y-auto max-h-[60vh] scrollbar-hide">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-xl flex items-center justify-center mb-3 relative">
                <Brain className="w-6 h-6 text-purple-500 dark:text-purple-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl opacity-20 animate-pulse"></div>
              </div>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-300 mb-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="font-medium text-sm">AI is analyzing...</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 max-w-xs">
                Processing your content to extract key insights.
              </p>
            </div>
          ) : summary ? (
            <div className="space-y-4">
              {/* Summary */}
              <div className="bg-white/50 dark:bg-neutral-800/70 rounded-xl p-4 border border-gray-200/60 dark:border-gray-700/60 shadow-sm transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <FileText className="w-3 h-3" />
                    Summary
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopy}
                    disabled={!summary}
                    className="
                      text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white
                      hover:bg-gray-100 dark:hover:bg-neutral-800
                      rounded-md transition-all text-xs h-7
                    "
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="w-3 h-3 mr-1 text-green-500 dark:text-green-400" />
                        <span className="text-green-500 dark:text-green-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 mr-1" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>

                <div className="text-sm text-gray-700 dark:text-gray-200 whitespace-pre-line leading-relaxed max-h-[40vh] overflow-y-auto pr-2 scrollbar-hide">
                  {summary}
                </div>
              </div>

              {/* AI Badge */}
              <div className="bg-gradient-to-r from-blue-100/40 to-purple-100/40 dark:from-blue-900/10 dark:to-purple-900/10 rounded-lg p-3 border border-blue-300/30 dark:border-blue-800/30">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500/10 dark:bg-blue-400/20 rounded-md flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-blue-500 dark:text-blue-300" />
                  </div>
                  <div className="text-xs">
                    <div className="text-blue-700 dark:text-blue-300 font-medium">
                      AI-Powered Analysis
                    </div>
                    <div className="text-blue-500/80 dark:text-blue-400/60">
                      Generated using advanced language models.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-12 h-12 bg-gray-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center mb-3">
                <FileText className="w-6 h-6 text-gray-400 dark:text-gray-500" />
              </div>
              <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 mb-2">
                No Summary Available
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 max-w-xs">
                Generate a summary from your document content.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200/60 dark:border-gray-800/60 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              PolyNote AI
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={onClose}
                size="sm"
                className="
                  bg-gray-100 dark:bg-neutral-800
                  border-gray-200 dark:border-gray-700
                  text-gray-700 dark:text-gray-300
                  hover:bg-gray-200 dark:hover:bg-neutral-700
                  transition-all text-sm
                "
              >
                Close
              </Button>
              {summary && (
                <Button
                  onClick={handleCopy}
                  size="sm"
                  className="
                    bg-gradient-to-r from-purple-600 to-blue-600
                    hover:from-purple-700 hover:to-blue-700
                    text-white shadow-md shadow-purple-500/30
                    hover:scale-105 transition-transform text-sm
                  "
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 mr-1" />
                      Copy
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
