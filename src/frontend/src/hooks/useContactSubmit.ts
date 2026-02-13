import { useState } from 'react';
import { useActor } from './useActor';

export function useContactSubmit() {
  const { actor } = useActor();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const submitContact = async (name: string, email: string, message: string) => {
    if (!actor) {
      setIsError(true);
      setError(new Error('Backend connection not available'));
      return;
    }

    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);
    setError(null);

    try {
      await actor.submitMessage(name, email, message);
      setIsSuccess(true);
    } catch (err) {
      setIsError(true);
      setError(err instanceof Error ? err : new Error('Failed to submit message'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitContact,
    isSubmitting,
    isSuccess,
    isError,
    error,
  };
}
