import { type StorageAdapter } from "../storage";
import { type Session } from "@openai/agents";

type SessionSummary = {
  id: string;
  preview: string;
  createdAt: Date;
  updatedAt: Date;
};

export class SessionRecorder {
  constructor(private storage: StorageAdapter<Session>) {}

  async listSessions(count: number): Promise<SessionSummary[]> {
    return [];
  }
}
