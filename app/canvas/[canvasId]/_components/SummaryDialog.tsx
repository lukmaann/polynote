"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Brain, Sparkles, FileText, Copy, X, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface SummaryDialogProps {
  open: boolean;
  onClose: () => void;
  summary: string | null;
  loading?: boolean;
}

export function SummaryDialog({ open, onClose, summary, loading }: SummaryDialogProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (summary) {
      try {
        await navigator.clipboard.writeText(summary);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-0 overflow-hidden animate-in fade-in-50 zoom-in-95">
        {/* Header */}
        <DialogHeader className="bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 border-b border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <div>
                <DialogTitle className="text-lg font-bold text-white flex items-center gap-2">
                  AI Summary
                  <div className="flex items-center gap-1 bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full text-xs">
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
              className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        {/* Content */}
        <div className="p-4 overflow-y-auto max-h-[60vh] scrollbar-hide">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-3 relative">
                <Brain className="w-6 h-6 text-purple-400" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl opacity-20 animate-pulse"></div>
              </div>
              <div className="flex items-center gap-2 text-purple-300 mb-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="font-medium text-sm">AI is analyzing...</span>
              </div>
              <p className="text-xs text-gray-400 max-w-xs">
                Processing your content to extract key insights.
              </p>
            </div>
          ) : summary ? (
            <div className="space-y-4">
              {/* Summary Content */}
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs text-gray-400 ">
                    <FileText className="w-3 h-3" />
                    Summary
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopy}
                    className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-md transition-all text-xs h-7"
                    disabled={!summary}
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="w-3 h-3 mr-1 text-green-400" />
                        <span className="text-green-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 mr-1" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
                
                <div className="text-sm text-gray-200 whitespace-pre-line leading-relaxed max-h-[40vh] overflow-y-auto pr-2 scrollbar-hide">
                  {summary}
                </div>
              </div>

              {/* AI Badge */}
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg p-3 border border-blue-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-md flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-blue-400" />
                  </div>
                  <div className="text-xs">
                    <div className="text-blue-200 font-medium">AI-Powered Analysis</div>
                    <div className="text-blue-300/80">
                      Generated using advanced language models.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-12 h-12 bg-gray-700/50 rounded-xl flex items-center justify-center mb-3">
                <FileText className="w-6 h-6 text-gray-500" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">No Summary Available</h3>
              <p className="text-xs text-gray-400 max-w-xs">
                Generate a summary from your document content.
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="border-t border-gray-700 p-4 bg-gray-800/50">
          <div className="flex items-center justify-between gap-3">
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              PolyNote AI
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={onClose}
                size="sm"
                className="bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white transition-all text-sm"
              >
                Close
              </Button>
              {summary && (
                <Button
                  onClick={handleCopy}
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-all hover:scale-105 shadow-lg shadow-purple-500/25 text-sm"
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