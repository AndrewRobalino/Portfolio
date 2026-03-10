"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 font-mono text-sm">
          <p className="text-slash-red">ERROR: component crashed unexpectedly</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-2 border border-white/20 px-3 py-1 text-white/60 hover:text-white/80 hover:border-white/40 transition-colors"
          >
            [ retry ]
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
