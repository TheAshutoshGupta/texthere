'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, Image } from 'lucide-react'

export function BlogEditorComponent() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleFormat = (command: string) => {
    document.execCommand(command, false, undefined)
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Write Your Blog Post</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Enter your blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-2xl font-bold"
            />
          </div>
          <Tabs defaultValue="write">
            <TabsList className="mb-4">
              <TabsTrigger value="write">Write</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
            <TabsContent value="write">
              <div className="mb-4 flex space-x-2">
                <Button variant="outline" size="icon" onClick={() => handleFormat('bold')}>
                  <Bold className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleFormat('italic')}>
                  <Italic className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleFormat('underline')}>
                  <Underline className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleFormat('justifyLeft')}>
                  <AlignLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleFormat('justifyCenter')}>
                  <AlignCenter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleFormat('justifyRight')}>
                  <AlignRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleFormat('insertUnorderedList')}>
                  <List className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleFormat('insertImage')}>
                  <Image className="h-4 w-4" />
                </Button>
              </div>
              <div
                className="min-h-[300px] border rounded-md p-2"
                contentEditable
                onInput={(e) => setContent(e.currentTarget.innerHTML)}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </TabsContent>
            <TabsContent value="preview">
              <div className="prose max-w-none">
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button>Publish</Button>
        </CardFooter>
      </Card>
    </div>
  )
}