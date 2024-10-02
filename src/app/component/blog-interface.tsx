import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Rss, Bell, BookmarkPlus } from "lucide-react"

export default function BlogInterface() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">MyBlog</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Categories</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex">
        <div className="w-2/3 pr-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Latest Post Title</CardTitle>
              <CardDescription>Published on June 1, 2023 by John Doe</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                This is a preview of the latest blog post. It contains a brief introduction to the topic
                and encourages readers to click to read more...
              </p>
            </CardContent>
            <CardFooter>
              <Button>Read More</Button>
            </CardFooter>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Another Interesting Article</CardTitle>
              <CardDescription>Published on May 28, 2023 by Jane Smith</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Here's another blog post preview. This one might be about a different topic, showcasing
                the variety of content on the blog...
              </p>
            </CardContent>
            <CardFooter>
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </div>

        <aside className="w-1/3">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Search</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Search posts..." />
                <Button type="submit" size="icon">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-600 hover:underline">Technology</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Travel</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Food</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Lifestyle</a></li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>About the Author</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder-avatar.jpg" alt="Author" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-sm text-gray-600">Passionate blogger and tech enthusiast</p>
              </div>
            </CardContent>
          </Card>
        </aside>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2023 MyBlog. All rights reserved.</p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon">
              <Rss className="h-5 w-5" />
              <span className="sr-only">RSS Feed</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="ghost" size="icon">
              <BookmarkPlus className="h-5 w-5" />
              <span className="sr-only">Bookmark</span>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
