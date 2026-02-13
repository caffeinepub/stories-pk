import { useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import { UserPlus, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';

export default function SignupPage() {
  const navigate = useNavigate();
  const { login, loginStatus, identity, isLoggingIn, isLoginError } = useInternetIdentity();

  useEffect(() => {
    if (loginStatus === 'success' && identity) {
      // Redirect to home after successful signup
      navigate({ to: '/' });
    }
  }, [loginStatus, identity, navigate]);

  const handleSignup = async () => {
    try {
      await login();
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  // If already authenticated
  if (identity && loginStatus === 'success') {
    return (
      <div className="container mx-auto flex min-h-[60vh] max-w-md items-center justify-center px-4 py-12">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Already Signed In</CardTitle>
            <CardDescription>You are already authenticated.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Principal: <span className="font-mono text-xs">{identity.getPrincipal().toString()}</span>
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="flex-1">
                <a href="/">Go to Home</a>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <a href="/stories">Browse Stories</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto flex min-h-[60vh] max-w-md items-center justify-center px-4 py-12">
      <Card className="w-full">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <UserPlus className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl">Create Your Account</CardTitle>
          <CardDescription>Sign up to start exploring amazing stories</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={handleSignup} disabled={isLoggingIn} className="w-full" size="lg">
            {isLoggingIn ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Connecting...
              </>
            ) : (
              <>
                <UserPlus className="mr-2 h-4 w-4" />
                Sign Up
              </>
            )}
          </Button>

          {isLoginError && (
            <p className="text-center text-sm text-destructive">
              Signup failed. Please try again.
            </p>
          )}

          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Button variant="link" asChild className="h-auto p-0 text-primary">
              <a href="/login">Sign in</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
